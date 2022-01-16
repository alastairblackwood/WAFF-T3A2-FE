import React from 'react'
import { ScheduleContainer, ScheduleHeader, ScheduleHeader2, ScheduleHeader3, ScheduleP, ScheduleSpan, ScheduleTable } from './ScheduleElements'

const Schedule = () => {

    const scheduleList = [
        {
            title: "Fantastic Mr. Fox",
            date: "01-17-22",
            summary: "Lorem ipsum foxy boi"
        },
        {
            title: "Fantastic Mr. Fox",
            date: "01-17-22",
            summary: "Lorem ipsum foxy boi"
        },
        {
            title: "Fantastic Mr. Fox",
            date: "01-17-22",
            summary: "Lorem ipsum foxy boi"
        },
        {
            title: "Fantastic Mr. Fox",
            date: "01-17-22",
            summary: "Lorem ipsum foxy boi"
        },
      


    ]

    return (
        <ScheduleContainer>
            <ScheduleHeader>Schedule</ScheduleHeader>
            <ScheduleHeader2>Brisbane - 17th Jan 2022 - 30th Jan 2022</ScheduleHeader2>
            <ScheduleHeader3>Motion Picture Cinema</ScheduleHeader3>
            <ScheduleTable className='Table container'>
            {/* {films.map((film) => {
            const {id, images, name} = film;
            console.log(films[0])
            // more stuff coming up
            return <CarouselCell key={id} className={films[0] === film ? "carousel-item active" : "carousel-item"} >
                <img src={images[0]} className="d-block w-100" alt={name}/>
                <CarouselButton>Book now</CarouselButton>
                <CarouselButton>Show tickets and times</CarouselButton>
            </CarouselCell>
            })} */}
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
