import FormRegistration from "../../../components/Form/Registration"

export default function AdminProfil ( { isLoggedIn, errorToast, successToast }) {
    return (
      <div className="admin-profil">
        <FormRegistration isLoggedIn={isLoggedIn} errorToast={errorToast} successToast={successToast} />
      </div>
    )
}
