

//A common pattern in React is for a component to return multiple elements. 
//Fragments let you group a list of children without adding extra nodes to the DOM.
//

const noFragment = <section id="example1">
    <table>
        <tbody>
            <ExampleWithoutFragment />
        </tbody>
    </table>
</section>;

function ExampleWithoutFragment() {
    return (
        <div>
            <tr>
                <td>Hai</td>
                <td>Sreeraj</td>
            </tr>
            <tr>
                <td>Hai</td>
                <td>Suyati</td>
            </tr>
        </div>
    );
};

function ExampleWithFragment() {
    return (
        <React.Fragment>
            <tr>
                <td>Hai</td>
                <td>Sreeraj</td>
            </tr>
            <tr>
                <td>Hai</td>
                <td>Suyati</td>
            </tr>
        </React.Fragment>
    );
};

const withFragment = <section id="example2">
    <table>
        <tbody>
            <ExampleWithFragment />
        </tbody>
    </table>
</section>;

// wrong html with div between <tbody> and <tr>
//ReactDOM.render(noFragment, document.getElementById('react-container'));

//correct html 
ReactDOM.render(withFragment, document.getElementById('react-container'));