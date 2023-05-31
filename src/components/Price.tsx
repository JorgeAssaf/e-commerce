import { FC } from 'react'

interface PriceProps {
  children?: React.ReactNode
  className?: string
}

const Price: FC<PriceProps> = ({ children, className }) => {
  return <p className={className}>{children?.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  })}</p>
}

export default Price