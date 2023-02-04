import Link from "next/link"

const NotFound = () => {
  return (
    <>
      <h1>The page you&apos;re looking for doesn&apos;t exist.</h1>
      <p>Try going back to the <Link href="/">home page</Link> to see if you can find the post you&apos;re looking for there.</p>
    </>
  )
}

export default NotFound
