import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Button from './Button'
import Flex from './Flex'
import WorkCard from './WorkCard'
import ae from "../assets/ae.png"
import ae2 from "../assets/ae2.png"
import ae3 from "../assets/ae3.png"
import ae4 from "../assets/ae4.png"

const RecentWork = () => {
    return (
        <>
            <Container >
                <Flex className=" justify-between items-end">
                <SectionHead
                    head="My Recent Work"
                    className="mt-31.25 "
                    titel="MY Mastering Video Editing Skills"
                />
                    
                    <Button>Learn More</Button>
                </Flex>
                <Flex className="mt-15 justify-between">
                    <WorkCard
                        head="Adobe After Effect"
                        para="Adobe After Effects is a powerful software application used motion graphics."
                        ImgSrc={ae}
                        percentager="90%"
                    />
                    <WorkCard
                        head="Final Cut Pro"
                        para="Adobe After Effects is a powerful software application used motion graphics."
                        ImgSrc={ae2}
                        percentager="80%"
                    />
                    <WorkCard
                        head="iMovie Film"
                        para="Adobe After Effects is a powerful software application used motion graphics."
                        ImgSrc={ae3}
                        percentager="85%"
                    />
                    <WorkCard
                        head="Adobe After Effect"
                        para="Adobe After Effects is a powerful software application used motion graphics."
                        ImgSrc={ae4}
                        percentager="99%"
                    />
                </Flex>
            </Container>
        </>
    )
}

export default RecentWork
