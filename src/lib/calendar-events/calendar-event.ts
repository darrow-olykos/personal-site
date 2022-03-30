type Recurrence = {
    pattern: 'none' | 'weekly' | 'biweekly',
    anEarlierInstanceExists: boolean
};

type Image = {
    url: string,
    alt: string
}

type Group = {
    name: string,
    image: Image
}

export type CalendarEvent = {
    id: string,
    name: string,
    datetimeInMs: number,
    image: Image,
    recurrence: Recurrence,
    group: Group,
}
