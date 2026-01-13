import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const upcomingMatches = [
  {
    id: 1,
    tournament: "Pro League Season 5",
    opponent: "Thunder Gaming",
    opponentLogo: "⚡",
    date: "20 января 2026",
    time: "18:00 МСК",
    format: "BO3",
    status: "upcoming",
    stream: "https://twitch.tv/willowteam",
  },
  {
    id: 2,
    tournament: "Winter Cup 2026",
    opponent: "Dragon Esports",
    opponentLogo: "🐉",
    date: "23 января 2026",
    time: "20:00 МСК",
    format: "BO5",
    status: "upcoming",
    stream: "https://twitch.tv/willowteam",
  },
  {
    id: 3,
    tournament: "Regional Championship",
    opponent: "Phoenix Squad",
    opponentLogo: "🔥",
    date: "27 января 2026",
    time: "19:00 МСК",
    format: "BO3",
    status: "upcoming",
    stream: "https://twitch.tv/willowteam",
  },
  {
    id: 4,
    tournament: "Pro League Season 5",
    opponent: "Shadow Wolves",
    opponentLogo: "🐺",
    date: "30 января 2026",
    time: "21:00 МСК",
    format: "BO3",
    status: "upcoming",
    stream: "https://twitch.tv/willowteam",
  },
];

const recentMatches = [
  {
    id: 5,
    tournament: "Winter Championship 2026",
    opponent: "Dragon Esports",
    opponentLogo: "🐉",
    date: "8 января 2026",
    score: "3:1",
    result: "win",
  },
  {
    id: 6,
    tournament: "Pro League Season 5",
    opponent: "Titan Force",
    opponentLogo: "⚔️",
    date: "5 января 2026",
    score: "2:1",
    result: "win",
  },
  {
    id: 7,
    tournament: "New Year Cup",
    opponent: "Storm Raiders",
    opponentLogo: "⛈️",
    date: "29 декабря 2025",
    score: "1:2",
    result: "loss",
  },
];

const Matches = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-6xl font-black text-white mb-4">
            РАСПИСАНИЕ МАТЧЕЙ
          </h1>
          <p className="text-xl text-muted-foreground">
            Предстоящие игры и последние результаты
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="CalendarClock" size={32} className="text-primary" />
              <h2 className="font-heading text-3xl font-bold text-white">
                Предстоящие матчи
              </h2>
            </div>

            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <Card
                  key={match.id}
                  className="bg-card border-border p-6 hover:border-primary transition-all duration-300 animate-fade-in hover:scale-[1.01]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="bg-blue-950 text-blue-400 border-blue-800 mb-2">
                        {match.tournament}
                      </Badge>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                            <span className="text-xl">🌳</span>
                          </div>
                          <span className="font-heading font-bold text-white">
                            Willow Team
                          </span>
                        </div>
                        <span className="font-heading text-2xl font-bold text-muted-foreground">
                          VS
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-xl">{match.opponentLogo}</span>
                          </div>
                          <span className="font-heading font-bold text-white">
                            {match.opponent}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {match.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {match.time}
                        </span>
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {match.format}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Badge className="bg-green-950 text-green-400 border-green-800 whitespace-nowrap">
                        <Icon name="Radio" className="mr-1" size={14} />
                        Прямой эфир
                      </Badge>
                      <a
                        href={match.stream}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors"
                      >
                        <Icon name="Tv" size={14} />
                        Смотреть на Twitch
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="History" size={32} className="text-primary" />
              <h2 className="font-heading text-3xl font-bold text-white">
                Последние результаты
              </h2>
            </div>

            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <Card
                  key={match.id}
                  className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="bg-purple-950 text-purple-400 border-purple-800 mb-2">
                        {match.tournament}
                      </Badge>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                            <span className="text-xl">🌳</span>
                          </div>
                          <span className="font-heading font-bold text-white">
                            Willow Team
                          </span>
                        </div>
                        <div className="font-heading text-3xl font-bold text-white px-4 py-1 bg-black/50 rounded-lg">
                          {match.score}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-xl">{match.opponentLogo}</span>
                          </div>
                          <span className="font-heading font-bold text-white">
                            {match.opponent}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        {match.date}
                      </div>
                    </div>

                    <Badge
                      className={
                        match.result === "win"
                          ? "bg-green-950 text-green-400 border-green-800"
                          : "bg-red-950 text-red-400 border-red-800"
                      }
                    >
                      {match.result === "win" ? (
                        <>
                          <Icon name="Trophy" className="mr-1" size={14} />
                          Победа
                        </>
                      ) : (
                        <>
                          <Icon name="X" className="mr-1" size={14} />
                          Поражение
                        </>
                      )}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Card className="bg-gradient-to-r from-primary/20 to-red-950/20 border-primary/50 p-8 text-center">
            <Icon name="Bell" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold mb-2 text-white">
              Не пропустите наши матчи!
            </h3>
            <p className="text-muted-foreground mb-4">
              Подпишитесь на наши социальные сети, чтобы получать уведомления о предстоящих играх
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-primary hover:bg-primary/80 text-white cursor-pointer">
                <Icon name="Youtube" className="mr-1" size={16} />
                YouTube
              </Badge>
              <Badge className="bg-primary hover:bg-primary/80 text-white cursor-pointer">
                <Icon name="Twitch" className="mr-1" size={16} />
                Twitch
              </Badge>
              <Badge className="bg-primary hover:bg-primary/80 text-white cursor-pointer">
                <Icon name="Twitter" className="mr-1" size={16} />
                Twitter
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Matches;
