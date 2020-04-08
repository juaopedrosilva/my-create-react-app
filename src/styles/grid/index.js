import styled from 'styled-components'
import { device } from './config'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
` 

function getWidthGrid(gridWidth) {
  if (!gridWidth) return;

  let width = (100 / (12 / gridWidth)) * 1;

  return `flex-basis: ${width}%;`;
}

export const Col = styled.div` 
  padding-top: .75rem;
  padding-bottom: .75rem;
  /* background-color: #E5EDF5;
  border: 1px solid #C9C1D5;
  color: #5F5F5F; */
  position: relative; 
  padding-right: 15px;
  padding-left: 15px;
 
  ${({ mobile }) => {
    if (mobile) {
      return `${device.mobile} {   
        ${getWidthGrid(mobile)}
      }`;
    } else {
        return `${getWidthGrid(3)}` 
    }
  }}

  ${({ tablet }) => {
    if (tablet) {
      return `${device.tablet} {   
          ${getWidthGrid(tablet)} 
        }`;
    } else {
        return `${getWidthGrid(3)}` 
    }
  }}

  ${({ desktop }) => {
    if (desktop) {
      return `${device.desktop} {   
          ${getWidthGrid(desktop)} 
        }`;
    } else {
        return `${getWidthGrid(3)}` 
    }
  }}
`