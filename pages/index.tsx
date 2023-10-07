import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$defaultPurple'
})

export default function Home() {
  return (
    <Button>Send</Button>
  )
}
