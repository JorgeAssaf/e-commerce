import { FC } from 'react'

interface PriceProps {
  children?: React.ReactNode
  className?: string
}

const Price: FC<PriceProps> = ({ children, className }) => {
  return <span className={className}>{children?.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })}</span>
}

export default Price