'use client';

import styles from "@/app/user/page.module.css";
import { requestArtisanStatus } from "@/app/lib/actions";
import { useState, useActionState } from 'react';

export default function RequestArtisan() {
	const [formShown, setFormShown] = useState(false);
	const [canSubmit, setCanSubmit] = useState(true);
	const [errorMessage, formAction, isPending] = useActionState(
		requestArtisanStatus,
		undefined,
	)

	const showForm = () => {
		setFormShown(true);
	}

	return (
		< >
		{
			formShown ?
			<form action={formAction} className={styles.requestForm}>
				<p>Enter your information below to request an artisan account.</p>
				<label>
					Artisan Name (What you want to be known as?)
					<input type="text" autofill="name" name="name" required />
				</label>
				<label>
					Short Description (What do you make/do?)
					<input type="text" name="short_description" required />
				</label>
				<label>
					Bio (What do you want people to know about you?)
					<textarea name="bio" rows="4" onInput={(e) => {
						e.currentTarget.rows = 4;
						while(e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
							e.currentTarget.rows ++;
						}
					}}>
					</textarea>
				</label>
				<label>
					Profile Image URL
					<input type="url" name="profile_image_url" required />
					{/*
						In a professional context, users should be able to upload images
						and those are used instead of having users give urls to already
						published images, though we do not have file transfer/storage
						setup so we can't implement that.
					*/}
				</label>
				<input type="submit" value="Request Artisan Account" disabled={canSubmit} />
			</form> :
			<button onClick={showForm} className={styles.requestBtn}>
				Request an Artisan Account
			</button>
		}
		</ >
	);
}
{/*
name
bio
location
profile_image_url
*/}