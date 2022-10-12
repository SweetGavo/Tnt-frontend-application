import resetpassword from '../pages/resetpassword';
import passwordcode from '../pages/passwordcode';
import confirmpassword from '../pages/confirmpassword';

const AuthPage = () => {
    const [resetPage, setResetPage] = useState(false);
    const [passwordCodePage, setPasswordCodePage] = useState(false);
    const [confirmPasswordPage, setConfirmPasswordPage] = useState(false);

    const resetFunction = () => {
        setResetPage(true);
    };
    const passwordCodeFunction = () => {
        setPasswordCodePage(true);
    };
    const confirmPasswordFunction = () => {
        setConfirmPasswordPage(true);
    };
    return (
        <div>
            {resetPage && <resetpassword reset={resetFunction}/>}
            {passwordCodePage && <passwordcode passwordpage={passwordCodeFunction} />}
            {confirmPasswordPage && <confirmpassword confirmpage={confirmPasswordFunction}/>}
        </div>
    );
}

export default AuthPage;