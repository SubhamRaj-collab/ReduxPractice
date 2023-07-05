import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state/index'

const Shop = () => {

  const dispatch = useDispatch();
  const balance = useSelector(state => state.ticket)

  return (
    <div>
        <button className='btn btn-primary mx-4 my-5' onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        <div className="d-inline-flex flex-column align-items-center">
            <div>Buy Ticket / Get Reward</div>
            <div>Total Balance: {balance}</div>
        </div>
        <button className='btn btn-primary mx-4' onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop