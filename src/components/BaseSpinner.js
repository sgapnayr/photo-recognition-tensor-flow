import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function BaseSpinner() {
  return (
    <SpinnerContainer>
      <div className="relative flex justify-center items-center">{Spinner()}</div>
    </SpinnerContainer>
  )
}

const Spinner = () => (
  <>
    <SpinnerInnerInner />
    <SpinnerInner />
    <SpinnerOuter />
    <SpinnerOuterOuter />
  </>
)

const SpinnerContainer = styled.div`
  flex-grow: 1;
  position: absolute;
  width: 100%;
  z-index: 1;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1.5;
  background-image: linear-gradient(to right, #your-gradient-color-1, #your-gradient-color-2);
`

const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerInnerInner = styled.div`
  animation: ${spinningAnimation} 0.5s linear infinite;
  width: 16px;
  height: 16px;
  border: 1px solid rgb(59 130 246);
  border-top-color: transparent;
  border-right-color: transparent;
  text-blue-600;
  border-radius: 9999px;
  position: absolute;
`

const SpinnerInner = styled.div`
  animation: ${spinningAnimation} 5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  width: 32px;
  height: 32px;
  border: 1px solid gray;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: 9999px;
  position: absolute;
`

const SpinnerOuter = styled.div`
  animation: ${spinningAnimation} 3s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  width: 48px;
  height: 48px;
  border: 1px solid rgb(168 85 247);
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: 9999px;
  position: absolute;
  background-image: linear-gradient(to right, rgb(168 85 247), #your-to-color);
  background-clip: padding-box;
`

const SpinnerOuterOuter = styled.div`
  animation: ${spinningAnimation} 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  width: 64px;
  height: 64px;
  border: 1px solid lightgray;
  border-bottom-color: transparent;
  text-blue-600;
  border-radius: 9999px;
  position: absolute;
`
