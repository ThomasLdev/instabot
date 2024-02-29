import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from 'config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import Input from 'components/form/Input';

export default function SettingsForm() {
    const [appUser, userLoading] = useAuthState(auth);
    const [userSettings, setUserSettings] = useState(
        {
            google_drive_token: '',
            google_drive_folder: '',
            instagram_post_frequency: 1,
            instagram_token: '',
        }
    );

    useEffect(() => {
        if (!appUser) return;

        const userSettingsDocRef = doc(db, "settings", appUser.uid);

        const getUserSettings = async () => {
            try {
                const snapshot = await getDoc(userSettingsDocRef);

                if (snapshot) {
                    setUserSettings(snapshot.data())
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error(error);
            }
        };

        getUserSettings();
    }, [appUser, userLoading]);

    const writeUserDoc = async (data) => {
        try {
            await setDoc(doc(db, 'settings', appUser.uid), data);
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        writeUserDoc(userSettings);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 p-6 bg-primary-alternate border border-primary rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-secondary border-b pb-2">Google Drive</h2>
                <div className="mb-6">
                    <Input
                        onChange={(e) => setUserSettings({ ...userSettings, google_drive_token: e.target.value })}
                        label="ID client OAuth 2.0"
                        name="google_drive_token"
                        id="user-user-settings-google-drive-token"
                        type="text"
                        placeholder="Enter your google drive OAuth key"
                        value={userSettings.google_drive_token}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                        To create your google drive application an get the Oauth id, follow the official guide <a href="https://developers.google.com/drive/api/quickstart/js?hl=fr#enable_the_api" className="font-medium text-alternate hover:underline">here</a>. Make sure to give the read and download rights to this token.
                    </p>
                </div>
                <div className="mb-6">
                    <Input
                        onChange={(e) => setUserSettings({ ...userSettings, google_drive_folder: e.target.value })}
                        label="Google drive path to wanted folder"
                        name="google_drive_folder"
                        id="user-user-settings-google-drive-folder"
                        type="text"
                        placeholder="Enter the path from the root folder to your files"
                        value={userSettings.google_drive_folder}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                        This path will be scanned and used to retrieve all files matching .jpg, .png, .webp and .txt files to create instagram posts based on the files names.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-2 p-6 bg-primary-alternate border border-primary rounded-lg shadow mt-3">
                <h2 className="text-2xl font-semibold text-secondary border-b pb-2">Instagram</h2>
                <div className="mb-6">
                    <Input
                        onChange={(e) => setUserSettings({ ...userSettings, instagram_token: e.target.value })}
                        label="Access Token"
                        name="instagram_token"
                        id="user-user-settings-instagram-token"
                        type="text"
                        placeholder="Enter your instagram access token"
                        value={userSettings.instagram_token}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                        This token is used to access your instagram account. Follow <a key='text' className="font-medium text-alternate hover:underline" href="https://theplusaddons.com/blog/get-instagram-access-token/#How-to-Get-an-Instagram-Access-Token">this documentation</a>, if you dont know how to create one.
                    </p>
                </div>
                <div className="mb-6">
                    <Input
                        onChange={(e) => setUserSettings({ ...userSettings, instagram_post_frequency: e.target.value })}
                        label="Post Frequency (in days)"
                        name="instagram_post_frequency"
                        id="user-user-settings-instagram-post-frequency"
                        type="number"
                        placeholder="Enter a number in days"
                        value={userSettings.instagram_post_frequency}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                        The frenquency at which the bot will post on your instagram account. The value is in days.
                    </p>
                </div>
            </div>

            <button className="text-white bg-accent hover:bg-alternate focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg w-full p-5 text-center mt-3">
                Save
            </button>
        </form>
    );
}