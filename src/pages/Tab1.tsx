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
	IonImg,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 1</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonCard>
						<IonCardHeader>
							<div style={{ marginBottom: "15px" }}>
								<IonImg
									src={
										"https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=879&q=80"
									}
								/>
							</div>
							<IonCardSubtitle>Introducing</IonCardSubtitle>
							<IonCardTitle>iPhone Pro 13 Max</IonCardTitle>
						</IonCardHeader>

						<IonCardContent>
							Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a
							week in the woods. Wash your spirit clean.
						</IonCardContent>
					</IonCard>
				</IonContent>
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
