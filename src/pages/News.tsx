import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const newsData = [
  {
    id: 1,
    title: "Изменения в составе: игрок Shadow покидает команду",
    date: "15 января 2026",
    category: "Состав",
    content: "После долгих обсуждений игрок Shadow принял решение покинуть основной состав Willow Team из-за продолжительного отсутствия активности. Мы благодарим его за вклад в команду и желаем успехов в будущем.",
    icon: "UserMinus",
  },
  {
    id: 2,
    title: "Новое пополнение: встречайте игрока Phoenix",
    date: "12 января 2026",
    category: "Состав",
    content: "Рады объявить о присоединении талантливого игрока Phoenix к основному составу! Phoenix показал выдающиеся результаты в академии и готов доказать свою ценность на турнирной арене.",
    icon: "UserPlus",
  },
  {
    id: 3,
    title: "Победа на Winter Championship 2026",
    date: "8 января 2026",
    category: "Турниры",
    content: "Willow Team одержала убедительную победу на Winter Championship 2026, обыграв в финале команду Dragon Esports со счетом 3:1. Это наша третья крупная победа в этом сезоне!",
    icon: "Trophy",
  },
  {
    id: 4,
    title: "Обновление тренировочной базы",
    date: "5 января 2026",
    category: "Команда",
    content: "Мы значительно улучшили нашу тренировочную базу, установив новое оборудование от наших партнеров TechGear Pro. Игроки теперь имеют доступ к топовым игровым станциям.",
    icon: "Monitor",
  },
  {
    id: 5,
    title: "Расширение Willow Academy",
    date: "1 января 2026",
    category: "Академия",
    content: "Willow Academy открывает набор молодых талантов! Мы ищем перспективных игроков, готовых развиваться под руководством наших опытных тренеров и пробиться в основной состав.",
    icon: "GraduationCap",
  },
  {
    id: 6,
    title: "Игрок Blaze — MVP турнира",
    date: "28 декабря 2025",
    category: "Достижения",
    content: "Наш капитан Blaze получил звание MVP на последнем турнире, показав феноменальную статистику с KDA 4.2 и 78% побед в личных дуэлях. Поздравляем!",
    icon: "Star",
  },
];

const News = () => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Состав": "bg-blue-950 text-blue-400 border-blue-800",
      "Турниры": "bg-green-950 text-green-400 border-green-800",
      "Команда": "bg-purple-950 text-purple-400 border-purple-800",
      "Академия": "bg-yellow-950 text-yellow-400 border-yellow-800",
      "Достижения": "bg-red-950 text-red-400 border-red-800",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-6xl font-black text-white mb-4">
            НОВОСТИ
          </h1>
          <p className="text-xl text-muted-foreground">
            Последние обновления и события из жизни Willow Team
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsData.map((news, index) => (
            <Card
              key={news.id}
              className="bg-card border-border p-6 hover:border-primary transition-all duration-300 animate-fade-in hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
                  <Icon name={news.icon as any} size={24} className="text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className={getCategoryColor(news.category)}>
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {news.date}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-3 text-white">
                    {news.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {news.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <Icon name="Bell" className="inline mr-2" size={16} />
            Следите за нашими социальными сетями, чтобы не пропустить важные новости
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
