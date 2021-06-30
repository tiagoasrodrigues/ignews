import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <h1 className={styles.title}>
      Hello <span>World!</span>

      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis est nec blandit malesuada. Integer orci sapien, feugiat vel leo sed, suscipit blandit arcu. Donec non velit velit. Sed tincidunt, nunc vitae malesuada mollis, nulla nulla egestas metus, vehicula fermentum ex leo sit amet nisl. Aliquam elementum augue vel aliquam consequat. Mauris luctus lobortis massa, id porta metus vehicula eu. Morbi rhoncus magna sit amet imperdiet venenatis. Nam interdum facilisis nibh in bibendum.</h2>
    </h1>
  )
}