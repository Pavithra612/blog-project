
// we will destructure the object we recieve through props
const Base=({title='Welcome to My Blog!',children})=>{

    return(
            <div classname='container'>
                
                <header>
                    <h2>This is Header</h2>
                </header>      
                    {children}
                <footer>
                    <h2>This is footer</h2>
                </footer>
                
                
            </div>    
    );
};

export default Base;