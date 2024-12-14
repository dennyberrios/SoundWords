import { Container } from "../../components/Container/styles";
import TranscriptionArea from "../../components/TranscriptionArea";
import { SectionTranscriptionArea } from "./styles";

const Home = () => {
    return ( 
        <Container>
            <SectionTranscriptionArea>
                <TranscriptionArea />
            </SectionTranscriptionArea>
        </Container>
     );
}
 
export default Home;