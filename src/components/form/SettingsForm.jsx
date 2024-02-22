import Input from 'components/form/Input';

export default function SettingsForm() {
    return (
            <form>
                <div className="flex flex-col gap-2 p-6 bg-primary-alternate border border-primary rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-secondary border-b pb-2">Google Drive</h2>
                    <div className="mb-6">
                        <Input
                            name="ID client OAuth 2.0"
                            type="text"
                            placeholder="Enter your google drive OAuth key"
                            value="828720291285-qf1k7dolnrvolvh905oah2io9ilpkbhc.apps.googleusercontent.com"
                        />
                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">To create your google drive application an get the Oauth id, follow the official guide <a href="https://developers.google.com/drive/api/quickstart/js?hl=fr#enable_the_api" className="font-medium text-alternate hover:underline">here</a>. Make sure to give the read and download rights to this token.</p>
                    </div>
                    <div className="mb-6">
                        <Input
                            name="Google drive path to wanted folder"
                            type="text"
                            placeholder="Enter the path from the root folder to your files"
                            value="myFolder"
                        />
                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">This path will be scanned and used to retrieve all files matching .jpg, .png, .webp and .txt files to create instagram posts based on the files names</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-primary-alternate border border-primary rounded-lg shadow mt-3">
                    <h2 className="text-2xl font-semibold text-secondary border-b pb-2">Instagram</h2>
                    <div className="mb-6">
                        <Input
                            name="Access Token"
                            type="text"
                            placeholder="Enter your instagram access token"
                            value="test"
                        />
                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">This token is used to access your instagram account. Follow <a className="font-medium text-alternate hover:underline" href="https://theplusaddons.com/blog/get-instagram-access-token/#How-to-Get-an-Instagram-Access-Token">this documentation</a> if you don't know how to create one.</p>
                    </div>
                </div>

                <button type="submit" className="text-white bg-accent hover:bg-alternate focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg w-full p-5 text-center mt-3">Save</button>
            </form>
    );
}