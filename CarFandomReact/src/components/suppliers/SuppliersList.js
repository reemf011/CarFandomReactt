import SupplierSummary from './SupplierSummary';

const SuppliersList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.suppliers.map((p) => (
        <SuppliersSummary suppliers={s} key={s._id} />
      ))}
    </div>
  );
};

export default SuppliersList;
