import "./ExploreContainer.css";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonItem,
	IonIcon,
	IonLabel,
	IonButton,
} from "@ionic/react";
interface ContainerProps {
	name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
	return (
		<div className="container">
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonCard>
						<IonCardHeader>
							<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
							<IonCardTitle>Card Title</IonCardTitle>
						</IonCardHeader>

						<IonCardContent>
							Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a
							week in the woods. Wash your spirit clean.
						</IonCardContent>
					</IonCard>
				</IonContent>
			</IonPage>
		</div>
	);
};

export default ExploreContainer;
