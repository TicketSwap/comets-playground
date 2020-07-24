import { useState, useRef, useEffect } from 'react'
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
import Component from '../components/Component'
import { ChromePicker as ColorPicker } from 'react-color'

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
  box-shadow: ${shadow.light};
`

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.stardust};
  border-radius: 4px 4px 0px 0px;
  padding: ${space[48]} ${space[32]};
`

const TextBlock = styled.div`
  text-align: center;
  background-color: ${color.nova};
  padding: ${space[32]};
`

const IconLabel = styled.p`
  margin: 0;
  color: ${color.spaceLight};
  font-weight: ${fontWeight.regular};
`

const EditorBar = styled.div`
  width: 100%;
  padding: ${space[32]};
  border-bottom: 1px solid ${color.stardust};
`

const EditorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px 56px;
  grid-gap: 16px;
`

const ColorBlockWrapper = styled.div`
  position: relative;
  align-self: end;
`

const ColorBlock = styled.div`
  border-radius: 4px;
  width: 56px;
  height: 56px;
  cursor: pointer;
`

export default function Home() {
  const [color, setColor] = useState('#00b6f0')
  const [size, setSize] = useState(32)
  const [search, setSearch] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const filteredIcons = Object.keys(icons).filter(icon =>
    icon.toLowerCase().includes(search.toLowerCase())
  )

  const colorPickerRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleColorpickerClick)

    return () => {
      document.removeEventListener('mousedown', handleColorpickerClick)
    }
  }, [])

  const handleColorpickerClick = e => {
    if (colorPickerRef.current.contains(e.target)) {
      setShowColorPicker(true)
      return
    }
    // outside click
    setShowColorPicker(false)
  }

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
          <EditorGrid>
            <Input
              placeholder="Search for icons"
              id="search"
              label="Search"
              // hideLabel
              value={search}
              onChange={v => setSearch(v.target.value)}
              leftAdornment={<MagnifyingGlass size={24} />}
            />

            <ColorBlockWrapper ref={colorPickerRef}>
              <ColorBlock
                style={{ backgroundColor: color }}
                onClick={() => setShowColorPicker(true)}
              />

              {showColorPicker && (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    right: 0,
                  }}
                >
                  <ColorPicker
                    color={color}
                    onChange={color => setColor(color.hex)}
                  />
                </div>
              )}
            </ColorBlockWrapper>

            <Input
              id="size"
              label="Size"
              value={size}
              type="number"
              min={0}
              max={88}
              onChange={e => {
                if (e.target.value > 88) {
                  return setSize(88)
                }

                setSize(e.target.value)
              }}
            />
          </EditorGrid>
        </NarrowPageLayout>
      </EditorBar>

      <main style={{ paddingTop: space[48] }}>
        <WidePageLayout>
          <IconGrid>
            {filteredIcons.map((icon, index) => {
              return (
                <IconWrapper key={index}>
                  <IconBlock>
                    <Component size={size} tag={icon} color={color} />
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
      `}</style>
    </div>
  )
}
