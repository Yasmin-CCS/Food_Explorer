import { Container } from './styles'

export function ButtonText({ icon: Icon, title, isActive, ...rest}) {
  return(
    <Container
    type="button"
    isActive={isActive}
    {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}