import { useNavigate } from "react-router-dom";
import { ErrorPageIcon } from "../../components/Icons";
import ErrorLayout from "../../layout/ErrorLayout";
import { ROUTE_HOME } from '../../constants/WebPath';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ErrorLayout>
        <div className="flex flex-col items-center mx-auto">
          <ErrorPageIcon />
          <h1 className="text-2xl font-semibold mt-4">Trang không khả dụng</h1>
          <p className="text-gray-500 mt-2">
            Rất tiếc, đã có lỗi xảy ra. Bạn vui lòng đăng nhập lại hoặc trở về
            Trang chủ nhé!
          </p>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md flex items-center space-x-2"
          onClick={() => navigate(ROUTE_HOME)}>
            <span>Trở về trang chủ</span>
          </button>
        </div>
      </ErrorLayout>
    </>
  );
};

export default ErrorPage;
