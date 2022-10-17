import resetpassword from '../resetpassword';
import passwordcode from '../passwordcode';
import confirmpassword from '../confirmpassword';
import Layouts from "../../layouts/layouts";

const Index = () => {
    const [resetPage, setResetPage] = useState(true);
    const [passwordCodePage, setPasswordCodePage] = useState(false);
    const [confirmPasswordPage, setConfirmPasswordPage] = useState(false);

    const resetFunction = () => {
        setResetPage(false);
        setPasswordCodePage(true);
    };
    const passwordCodeFunction = () => {
        setPasswordCodePage(true);
    };
    const confirmPasswordFunction = () => {
        setConfirmPasswordPage(true);
    };
    return (
        <div>
            {resetPage && <resetpassword resetFunction={resetFunction}/>}
            {passwordCodePage && <passwordcode passwordpage={passwordCodeFunction} />}
            {confirmPasswordPage && <confirmpassword confirmpage={confirmPasswordFunction}/>}
        </div>
    );
}

Index.getLayout = function getLayout(page) {
    return <Layouts>{page}</Layouts>;
  };
  
  export default Index;
  