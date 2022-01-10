export const obterPalavraInicialMaiuscula = (palavra: string): string => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};

export const obterFraseInicialMaiuscula = (frase: string): string => {
  const palavras = frase.split(' ');
  return palavras
    .map((palavra) =>
      palavraDeveFicarMaiuscula(palavra) ? obterPalavraInicialMaiuscula(palavra) : palavra.toLowerCase(),
    )
    .join(' ');
};

export const palavraDeveFicarMaiuscula = (palavra: string): boolean => {
  const palavraMaiuscula = palavra.toUpperCase();
  return !(
    palavraMaiuscula === 'DO' ||
    palavraMaiuscula === 'DOS' ||
    palavraMaiuscula === 'DA' ||
    palavraMaiuscula === 'DAS' ||
    palavraMaiuscula === 'DE'
  );
};

export const isEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
