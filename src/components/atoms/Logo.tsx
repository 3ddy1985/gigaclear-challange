import { logos } from '../../../public/assets/logos'
import styles from'./Logo.module.sass'

export type IconType = 'gicon' | 'core' | 'strapline' 

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  type: IconType
}

export const Logo: React.FC<LogoProps> = ({ type }) => {

  return (
    <div className={styles.logo}>
      <svg
        data-name="GigaclerLogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={logos[type].viewBox}
        >
        {logos[type].paths.map((p, i) => <path key={i} d={p} className='fill-white' />)}
      </svg>
    </div>
  )
}


