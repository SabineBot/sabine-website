import { getTranslations } from "next-intl/server"

export default async function Commands() {
  const t = await getTranslations()

  const commands = await (await fetch(process.env.API_URL + "/commands", {
    headers: {
      authorization: process.env.AUTH!
    }
  })).json()

  return (
    <>
      <div>
        <h1 className="flex flex-col text-7xl items-center pt-15">
          {t("commands.title")}
        </h1>
      </div>

      <div
        className="flex flex-col items-center justify-center pt-10"
      >
        {
          commands.map((cmd: any, index: number) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-5 rounded-md max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-115"
            >
              <h2
                className="text-3xl"
              >
                /{cmd.name}
              </h2>
              <p
                className="mt-2"
              >
                {cmd.description}
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}