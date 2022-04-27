import { Tooltip } from "cardo-ui"
import { FaBeer } from "react-icons/fa"

const Tooltips = () => {
  const HoverContent = () => (
    <span>
      <FaBeer />
      <p>Tooltip</p>
    </span>
  )
  const HoverLongContent = () => (
    <span>
      <FaBeer />
      <p>A</p>
      <p>Longer</p>
      <p>Tooltip</p>
      <FaBeer />
    </span>
  )
  return (
    <section className='modals'>
      <h2 className='title'>Hovers</h2>
      <article className='centered'>
        <h3 className='subtitle'>Tooltip</h3>
        <div className='content'>
          <Tooltip content={<HoverContent />}>
            <p>Hover me top </p>
          </Tooltip>
          <Tooltip content={<HoverLongContent />}>
            <p>Hover me top longer content</p>
          </Tooltip>
          <Tooltip content={<HoverContent />} variant='bottom'>
            <p>Hover me bottom </p>
          </Tooltip>
        </div>
      </article>
    </section>
  )
}
export default Tooltips
