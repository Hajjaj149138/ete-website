// ════════════════════════════════════════════════════════════════
//  RECURRING EVENTS
//
//  Every event on the site repeats automatically every 3 months.
//  The dates stored in content.ts / each event's content file are
//  just the FIRST occurrence — this function rolls them forward in
//  fixed 3-month jumps until it finds the next occurrence that
//  hasn't ended yet. Nothing needs to be manually updated when an
//  event date passes; it just quietly becomes the next cycle.
//
//  Example: stored as Sep 13–14 → after Sep 14 passes, this
//  function returns Dec 13–14 automatically (then Mar 13–14, etc).
// ════════════════════════════════════════════════════════════════

const RECUR_MONTHS = 3;

function addMonths(date: Date, months: number): Date {
  const d = new Date(date.getTime());
  d.setMonth(d.getMonth() + months);
  return d;
}

export interface Occurrence {
  startDate: Date;
  endDate:   Date;
}

/** Given an event's original (first-ever) start/end, return the
 *  current or next upcoming occurrence, rolled forward in
 *  RECUR_MONTHS-month steps as many times as needed. */
export function getCurrentOccurrence(startISO: string, endISO: string): Occurrence {
  const now = new Date();
  let start = new Date(startISO);
  let end   = new Date(endISO);

  // Safety: if dates are somehow invalid, just return them as-is.
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return { startDate: start, endDate: end };

  while (end.getTime() <= now.getTime()) {
    start = addMonths(start, RECUR_MONTHS);
    end   = addMonths(end, RECUR_MONTHS);
  }
  return { startDate: start, endDate: end };
}

/** Same as getCurrentOccurrence but returns ISO strings — handy for
 *  passing straight into JSON-LD / schema builders. */
export function getCurrentOccurrenceISO(startISO: string, endISO: string) {
  const { startDate, endDate } = getCurrentOccurrence(startISO, endISO);
  return { startISO: startDate.toISOString(), endISO: endDate.toISOString() };
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
}

/** Human-readable date label for an occurrence, e.g. "10th October 2026"
 *  or, for multi-day events, "14th & 15th August 2026". Since `end` is
 *  often stored as the exclusive midnight boundary of the next day
 *  (e.g. an event ending "Aug 16 00:00" really means "through Aug 15"),
 *  this pulls back 1 minute before reading the end day so the label
 *  shows the correct last active day. */
export function formatEventDateLabel(start: Date, end: Date): string {
  const displayEnd = new Date(end.getTime() - 60000);
  const month = start.toLocaleString("en", { month: "long" });
  const year  = start.getFullYear();

  if (start.toDateString() === displayEnd.toDateString()) {
    return `${ordinal(start.getDate())} ${month} ${year}`;
  }
  const endMonth = displayEnd.toLocaleString("en", { month: "long" });
  if (month === endMonth) {
    return `${ordinal(start.getDate())} & ${ordinal(displayEnd.getDate())} ${month} ${year}`;
  }
  return `${ordinal(start.getDate())} ${month} – ${ordinal(displayEnd.getDate())} ${endMonth} ${displayEnd.getFullYear()}`;
}
