import React from 'react'
import { GetStaticProps } from 'next'

interface NotFoundProps {
  message: string
}

const NotFound = ({ message }: NotFoundProps) => (
  <div>
    <h1>APP ROUTER - 404 PAGE - NEW </h1>
    <p>This page is using the APP ROUTER</p>
    <p>{message}</p>
  </div>
)

export const getStaticProps: GetStaticProps<NotFoundProps> = async () => {
  // You can fetch data here if needed
  return {
    props: {
      message: "Custom message fetched at build time"
    }
  }
}

export default NotFound
