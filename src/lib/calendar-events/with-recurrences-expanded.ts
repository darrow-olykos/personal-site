import type { CalendarEvent } from "./calendar-event";

/**
 * withRecurrencesExpanded adds events to a CalendarEvent list for purpose of rendering a list of event instances
 *    only adds up to 20 events, and will make 10 additions for an event with a recurrence
 *    DOES NOT sort events, sorting must be handled by consumer
 * @param events a CalendarEvent list
 * @returns a CalendarEvent list with up to MAX_NUM_EVENTS injected, based on event recurrence values
 */
export function withRecurrencesExpanded(events: Array<CalendarEvent>) {
    const MAX_NUM_EVENTS = 20;
    const TIMES_TO_EXPAND = 10;
    let expandedEvents: Array<CalendarEvent> = [];

    for (let i = 0; i < events.length && expandedEvents.length < MAX_NUM_EVENTS; i++) {
        let event = events[i];
        expandedEvents.push(event);
        if (event.recurrence !== 'none') {
            let weeksToAdd;
            if (event.recurrence === 'biweekly') {
                weeksToAdd = 2;
            } else if (event.recurrence === 'weekly') {
                weeksToAdd = 1;
            } else {
                throw 'unexpected recurrence value';
            }
            for (let expandCount = 1; expandCount <= TIMES_TO_EXPAND; expandCount++) {
                const eventCopy = Object.assign({}, event);
                const ONE_WEEK_IN_MS = 1000 * 60 * 60 * 24 * 7;
                eventCopy.datetimeInMs = event.datetimeInMs + ONE_WEEK_IN_MS * weeksToAdd * expandCount;
                expandedEvents.push(eventCopy);
            }
        }
    }

    return expandedEvents;
}