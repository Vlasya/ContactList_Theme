import './App.css';
import {WrapperUI} from "./modules/ui/components/WrapperUI";
import {Contacts} from "./modules/contacts/components/Contacts/Contacts";
import {ContainerUI} from "./modules/ui/components/ContainerUI";
import {ThemeToggle} from "./modules/ui/components/ThemeToggle";

function App() {
    return (
        <WrapperUI>
            <ContainerUI>
                <ThemeToggle/>
                <Contacts/>
            </ContainerUI>
        </WrapperUI>
    );
}
export default App;
