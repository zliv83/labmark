import BlockTitle from '@/components/BlockTitle';
import ServiceCard from './ServiceCard';
import styles from './Services.module.scss';

export default function Services() {
  const services = [
    {
      title: 'Exteriors',
      className: styles.exteriors,
      key: 1,
    },
    {
      title: 'Roofing',
      className: styles.roofing,
      key: 2,
    },
    {
      title: 'Siding',
      className: styles.siding,
      key: 3,
    },
    {
      title: 'Gutters',
      className: styles.gutters,
      key: 4,
    },
  ];

  const serviceCards = services.map((service) => (
    <ServiceCard
      key={service.key}
      title={service.title}
      className={service.className}
    />
  ));

  return (
    <div className={styles.services}>
      <BlockTitle title="Services" className={styles.blockTitle} />
      {serviceCards}
    </div>
  );
}
