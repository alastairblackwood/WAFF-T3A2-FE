import React from 'react'
import { ScheduleContainer, ScheduleHeader, ScheduleHeader2, ScheduleHeader3, ScheduleP, ScheduleSpan, ScheduleTable } from './ScheduleElements'

const Schedule = () => {

    const scheduleList = [
        {
            title: "Rushmore",
            date: "2021-04-25",
            summary: "A teenager at Rushmore Academy falls for a much older teacher and befriends a middle-aged industrialist. "
        },
        {
            title: "Fantastic Mr. Fox",
            date: "2021-08-05",
            summary: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation."
        },
        {
            title: "The Royal Tenenbaums",
            date: "01-17-22",
            summary: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons."
        },
        {
            title: "The Darjeeling Limited",
            date: "01-17-22",
            summary: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other."
        },
        {
            title: "Moonrise Kingdom",
            date: "01-17-22",
            summary: "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them."
        },
      


    ]

    return (
        <ScheduleContainer>
            <ScheduleHeader>Schedule</ScheduleHeader>
            <ScheduleHeader2>Brisbane - 17th Jan 2022 - 30th Jan 2022</ScheduleHeader2>
            <ScheduleHeader3>Motion Picture Cinema</ScheduleHeader3>
            <ScheduleTable className='Table container'>
            <div className='row row-cols-3'>
                <ScheduleSpan>Title</ScheduleSpan>
                <ScheduleSpan>Date</ScheduleSpan>
                <ScheduleSpan>Summary</ScheduleSpan>
            {scheduleList.map((film) => {
                const {title, date, summary} = film;

                return (
                    <>
                    <div className='col'>
                        <ScheduleP>{title}</ScheduleP>
                    </div>
                    <div className='col'>
                        <ScheduleP>{date}</ScheduleP>
                    </div>
                    <div className='col'>
                        <ScheduleP>{summary}</ScheduleP>
                    </div>
                    </>
                );
            })}
            </div>
            </ScheduleTable>
        </ScheduleContainer>
    )
}

export default Schedule
