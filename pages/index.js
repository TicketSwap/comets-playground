import Head from 'next/head'
import { Cover, H1, color, H3 } from '@ticketswap/solar'
import styled from '@emotion/styled'

const StyledCover = styled(Cover)`
  text-align: center;
  background-color: ${color.earth};
`

const CoverTitle = styled(H1)`
  color: ${color.nova};
`

const CoverSubtitle = styled(H3)`
  color: ${color.nova};
`

const Link = styled.a`
  text-decoration: none;
  color: ${color.earthLightest};
`

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Comets - by TicketSwap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledCover>
          <CoverTitle>Comets ☄️ by TicketSwap</CoverTitle>
          <CoverSubtitle>
            Icons used throughout the{' '}
            <Link href="https://www.ticketswap.com" target="_blank">
              TicketSwap
            </Link>{' '}
            product.
          </CoverSubtitle>
        </StyledCover>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        ::selection {
          background-color: ${color.earth};
          color: ${color.nova};
        }
      `}</style>
    </div>
  )
}
