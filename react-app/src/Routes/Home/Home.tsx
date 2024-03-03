import './Home.css';

//Make button that creates a new "page"
//Add page to navbar
//Create Postgre database to allow this to happen 

const Home: React.FC = () =>{
  return (
    <>
    <p>Create new List</p>
    </>
  )
}

Home.defaultProps = {
  title: 'Default Title',
};

export default Home
