import React from 'react';
import './hobbies.css';
import korean from '../../assets/korean.jpg';

const Hobbies = () => {
  return (
    <div className='the_main_hobbies'>
        <h1 className='the_main_hobbies_title'>Hobbies and Interest</h1>
        <div className='the_main_hobbies_stuff'>
          <div className='the_main_hobbies_p'>
            <p className='the_main_hobbies_p1'>During my free time I enjoy playing online games with my friends. I find playing video games allows me to apply my creativity side by solving problems as a team
              and exploring different play styles. Video games interest me as I wonder how the game mechanics are made and how I could get inspiration from it.
            </p>
            <p className='the_main_hobbies_p2'>I enjoy programming on my free time as it feels like a sandbox for my creativity to be unleashed. There are so many things to learn in the programming world that
              sometimes I dont even know where to start. I tend to follow my sudden inspiration and curiosity to research on specific programming topics.</p>
            <p className='the_main_hobbies_p3'>My friends name is Bobby and he is a labsky. I got him when he was 4 months old and now he is currently 7 months old. I train Bobby as he grows and currently he 
              can do "hand", "sit", and is comfortable with stairs. Currently he is working on "down" but he is friendly and likes to sniff people he meets.
            </p>
            <p className='the_main_hobbies_p4'>Badminton is a sport I play very often with friends as it is a stright forward game where it gets advance with play tactics. I am not really good at the sport
              but it is a great way to burn calories and it is enjoyable. I also like to work out at home as a way to keep fit as we are in a pandemic situation.
            </p>
            <p className='the_main_hobbies_p5'>
              I am trying to learn new languages such as Mandarin, Cantonese, and Korean. My parents signed me up for classes during elementary school but I did not appreciate it as I was young and
              immature. Now I have experienced situations where there is a language barrier and I have seen the potential in learning another language. I mainly self teach myself which 
              I find to be much more difficult as I do not have someone to correct me if I make mistakes.
            </p>
          </div>
          <div className='the_main_hobbies_korean'>
            <img src={korean} style= {{height: 550, width: 450}} alt="korean notes"/>
          </div>
        </div>
    </div>
  )
}

export default Hobbies