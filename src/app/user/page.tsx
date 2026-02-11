import { auth, signOut } from '@/auth';
import styles from "@/app/user/page.module.css";

import UserInfoForm from "@/app/ui/user/UserInfoForm";
import ArtisanUserPanel from "@/app/ui/user/ArtisanUserPanel";
import RequestArtisan from "@/app/ui/user/RequestArtisan";

export default async function UserPage() {
	const session = await auth();

	if(!session || !session.user)
		return <p className={styles.notice}>You are not logged in.</p>

	return (
		< >
			<h1>{session.user.name}'s Profile</h1>
			<p>Welcome, {session.user.name}.</p>

			<UserInfoForm user={session.user} />

			{
				session.user.artisan_id ?
				<ArtisanUserPanel /> :
				<RequestArtisan />
			}

			<form className={styles.logout} action={async () => {
				'use server';
				await signOut({ redirectTo: '/' });
			}}>
				<label>
					(Temporary button until Header is updated.)
					<button>
						Log out
					</button>
				</label>
			</form>
		</ >
	);
}