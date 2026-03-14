import { useState } from 'react';
import axios from 'axios';

export function GeradorRespostaIA() {
   const [pergunta, setPergunta] = useState('');
   const [resposta, setResposta] = useState('');
   const [carregando, setCarregando] = useState(false);
   const [erro, setErro] = useState(null);

   async function consultarIA() {
      setCarregando(true);
      setErro(null);
      setResposta('');

      try {
         const resultado = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',
            prompt: pergunta,
            max_tokens: 100,
            temperature: 0.7
         }, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer CHAVE API AQUI'
            }
         });

         setResposta(resultado.data.choices[0].text.trim());
      } catch (err) {
         setErro('Erro ao consultar a IA.');
      } finally {
         setCarregando(false);
      }
   }

   return (
      <div>
         <h2>Gerador de Respostas com IA</h2>
         <input
            type="text"
            value={pergunta}
            onChange={e => setPergunta(e.target.value)}
            placeholder="Digite uma pergunta..."
            style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
         />
         <button onClick={consultarIA} disabled={carregando || !pergunta}>
            {carregando ? 'Consultando...' : 'Enviar'}
         </button>

         {erro && <p style={{ color: 'red' }}>{erro}</p>}
         {resposta && (
            <div style={{ marginTop: '1rem', background: '#f9f9f9', padding: '1rem' }}>
               <strong>Resposta da IA:</strong>
               <p>{resposta}</p>
            </div>
         )}
      </div>
   );
}