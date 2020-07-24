import { useState } from 'react'
import Head from 'next/head'
import {
  Cover,
  H1,
  color,
  H3,
  device,
  space,
  shadow,
  fontWeight,
  Input,
} from '@ticketswap/solar'
import { MagnifyingGlass } from '@ticketswap/comets'
import styled from '@emotion/styled'
import { WidePageLayout, NarrowPageLayout } from '../components/PageLayout'
import icons from '../icons'
import Icon from '../components/Component'

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

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 32px;
  }
`

const IconWrapper = styled.div`
  cursor: pointer;
`

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.stardust};
  border-radius: 4px 4px 0px 0px;
  padding: ${space[48]} ${space[32]};
`

const TextBlock = styled.div`
  text-align: center;
  background-color: ${color.nova};
  box-shadow: ${shadow.light};
  padding: ${space[32]};
`

const IconLabel = styled.p`
  margin: 0;
  color: ${color.spaceLight};
  font-weight: ${fontWeight.regular};
`

const EditorBar = styled.div`
  /* background-color: ${color.stardust}; */
  width: 100%;
  padding: ${space[32]};
  border-bottom: 1px solid ${color.stardust};
`

export default function Home() {
  const [color, setColor] = useState('#fff')
  const [size, setSize] = useState(32)
  const [backgroundColor, setBackgroundColor] = useState('#000')
  const [search, setSearch] = useState('')

  const filteredIcons = Object.keys(icons).filter(icon =>
    icon.toLowerCase().includes(search)
  )

  return (
    <div className="container">
      <Head>
        <title>Comets Playground - by TicketSwap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
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
      </header>

      <EditorBar>
        <NarrowPageLayout>
          <Input
            placeholder="Search for icons"
            id="search"
            label="Search"
            hideLabel
            value={search}
            onChange={v => setSearch(v.target.value)}
            leftAdornment={<MagnifyingGlass size={24} />}
          />
        </NarrowPageLayout>
      </EditorBar>

      <main style={{ paddingTop: space[48] }}>
        <WidePageLayout>
          <IconGrid>
            {filteredIcons.map((icon, index) => {
              return (
                <IconWrapper key={index}>
                  <IconBlock style={{ backgroundColor }}>
                    <Icon size={size} tag={icon} color={color} />
                  </IconBlock>
                  <TextBlock>
                    <IconLabel>{icon}</IconLabel>
                  </TextBlock>
                </IconWrapper>
              )
            })}
          </IconGrid>
        </WidePageLayout>
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
