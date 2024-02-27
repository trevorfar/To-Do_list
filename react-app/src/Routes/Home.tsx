import '../Static/styles/Home.css';


function Home({ title }: {title: string } ) {
  return (
    <>
    <a className="button" href="/p1">{title}</a>
    <p>So</p>
    </>
  )
}

Home.defaultProps = {
  title: 'Default Title',
};

export default Home
