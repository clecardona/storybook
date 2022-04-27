import { Button, Modal } from "cardo-ui"
import { useState } from "react"

const Modals = () => {
  const ModalCentered = ({ size }: { size: "sm" | "md" | "lg" }) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button
          text={`Open ${size.substring(0, 1).toUpperCase()} Centered Modal`}
          onClick={() => setOpen(true)}
        />
        <Modal open={open} onClose={() => setOpen(false)} size={size}>
          <h2>This is a Right side modal</h2>
        </Modal>
      </>
    )
  }

  const ModalRight = ({ size }: { size: "sm" | "md" | "lg" }) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button
          text={`Open ${size.substring(0, 1).toUpperCase()} Side Modal`}
          onClick={() => setOpen(true)}
        />
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          variant='right'
          size={size}
        >
          <h2>This is a Right side modal</h2>
        </Modal>
      </>
    )
  }

  return (
    <section className='buttons'>
      <h2 className='title'>Modals</h2>
      <article className='centered'>
        <h3 className='subtitle'>Centered</h3>
        <div className='content'>
          <ModalCentered size='sm' />
          <ModalCentered size='md' />
          <ModalCentered size='lg' />
        </div>
      </article>
      <article className='right'>
        <h3 className='subtitle'>Right</h3>
        <div className='content'>
          <ModalRight size='sm' />
          <ModalRight size='md' />
          <ModalRight size='lg' />
        </div>
      </article>
    </section>
  )
}
export default Modals
