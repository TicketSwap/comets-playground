import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { space, device } from '@ticketswap/solar'

const commonLayoutStyles = css`
  position: relative;
  margin: 0 auto;
  padding-left: ${space[16]};
  padding-right: ${space[16]};

  @media ${device.tablet} {
    padding-left: ${space[32]};
    padding-right: ${space[32]};
  }
`

export const NarrowPageLayout = styled.div`
  ${commonLayoutStyles};
  max-width: ${space[768]};
`

export const WidePageLayout = styled.div`
  ${commonLayoutStyles};
  max-width: ${960 / 16}rem;

  @media ${device.laptopM} {
    max-width: ${1128 / 16}rem;
  }
`
