import { columnsDataDevelopment } from './variables/columnsData'
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from '../tables/components/DevelopmentTable';

const Users = () => {
    return (
        <div>
            <div className="mt-5 grid h-full gap-5">
                <DevelopmentTable
                    columnsData={columnsDataDevelopment}
                    tableData={tableDataDevelopment}
                />
            </div>

        </div>
    );
};

export default Users;
