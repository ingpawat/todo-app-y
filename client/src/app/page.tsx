"use client"
import React from 'react';
import './style.scss';
import ProgressBar from "@ramonak/react-progress-bar";

export default function Home() {

  return (
    <>
      <main className='main'>
        <div className='container'>
          <div className='progress-box'>
            <div className="left-side">
              <p className='progress-title'>Progress</p>
              <div className='progress-bar-center'>
                <ProgressBar
                  completed={80}
                  bgColor="#fff"
                  height="7.343px"
                  width="480px"
                  borderRadius="999px"
                  labelAlignment="outside"
                  isLabelVisible={false}
                  baseBgColor="#3B3B3B"
                  labelColor="#e80909"
                  animateOnRender
                  maxCompleted={100}
                />
              </div>
              <p className='completed-text'>... completed</p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

