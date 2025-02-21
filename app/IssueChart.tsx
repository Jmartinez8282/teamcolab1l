'use client'
import { Card } from '@radix-ui/themes'
import {ResponsiveContainer, BarChart,XAxis, YAxis, Bar} from 'recharts'
import React from 'react'

const IssueChart = ({open,inProgress,closed}:{open:number;inProgress:number;closed:number}) => {

    const data = [
        {label: 'Open', value:open},
        {label: 'In Progress', value:inProgress},
        {label: 'Closed', value:closed}
    ]


  return (
    <>
        <Card>
            <ResponsiveContainer width={'100%'} height={300}>
                <BarChart data={data}>
                    <XAxis dataKey={'label'}/>
                    <YAxis/>
                    <Bar dataKey={'value'} barSize={140} style={{fill:'var(--iris-7'}}/>
                </BarChart>
            </ResponsiveContainer>

        </Card>
    </>
  )
}

export default IssueChart