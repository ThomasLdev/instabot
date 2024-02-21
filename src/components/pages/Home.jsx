import Base from 'components/pages/Base';
import LogTable from 'components/logs/LogTable';

export default function Home() {
    return (
        <Base pageTitle="Last Actions">
            <div className="text-center">
                <h2>Click on a row to see the action details...</h2>
            </div>
            <LogTable />
        </Base>
    )
}