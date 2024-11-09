import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex max-w-xl flex-col items-start space-y-6 p-6 text-left">
        <div className="mb-4 flex items-center">
          <Image
            src="/finance-ai2.png"
            width={173}
            height={39}
            alt="Finance AI"
          />
        </div>
        <h1 className="mb-6 text-2xl font-bold">Bem vindo!</h1>
        <p className="text-muted-foreground mb-12 max-w-md">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="mx-auto">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default LoginPage;
